import { Divider, Stack, Typography } from "@mui/joy";
import { useContext } from "react";
import { useGetUserById, useUpdateUserManual } from "../../api/use-user.api";
import { AuthContext } from "../../contexts/auth.context";
import { UserModel } from "../../models/user.model";
import { ManualForm } from "../layout/manual-form";
import { TabContainer } from "../shared/tabs-container";
import { UserProfileInfo } from "../shared/user-info";

type SharedManualTabProps = {
  user?: UserModel;
  isTeamView?: boolean;
};

const manualInfo = [
  { field: "about", title: "The basics you should know about me are..." },
  { field: "needs", title: "I need..." },
  { field: "feedback", title: "The best way to give me feedback is..." },
  { field: "happiness", title: "My talents will be happy when..." },
  { field: "passions", title: "Beyond work, I’m really passionate about..." }
] as const;

export const SharedManualTab = ({ user, isTeamView }: SharedManualTabProps) => {
  const { userId } = useContext(AuthContext);
  const { data: currentUser } = useGetUserById(userId);
  const displayUser = user || currentUser;
  const { mutateAsync: updateUserManual, isPending: isLoading } = useUpdateUserManual();

  return (
    <TabContainer>
      {!isTeamView && <UserProfileInfo user={currentUser} />}

      <Stack gap={4}>
        {!isTeamView && (
          <>
            <Typography level="body-md" textColor="neutral.baseDarker">
              Answer a few quick questions to help build your <strong>Manual of Me</strong>. This will make it easier
              for your teammates to collaborate with you!
            </Typography>

            <Divider />
          </>
        )}

        {manualInfo.map(({ field, title }) => (
          <ManualForm
            key={field}
            user={displayUser}
            updateUserManual={updateUserManual}
            field={field}
            title={title}
            isTeamView={isTeamView}
            isLoading={isLoading}
          />
        ))}
      </Stack>
    </TabContainer>
  );
};
