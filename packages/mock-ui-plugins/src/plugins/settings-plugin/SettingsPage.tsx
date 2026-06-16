import { Content, Title } from "@patternfly/react-core";

import NavOrderEditor from "./NavOrderEditor";

const SettingsPage = () => (
  <>
    <Title headingLevel="h1">Settings</Title>
    <Content component="p" className="pf-v6-u-mb-lg">
      Manage your workspace preferences.
    </Content>
    <NavOrderEditor />
  </>
);

export default SettingsPage;
