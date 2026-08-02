import MainLayout from "../components/layout/MainLayout";
import SettingsHeader from "../components/settings/SettingsHeader";
import CompanySettings from "../components/settings/CompanySettings";
import ProfileSettings from "../components/settings/ProfileSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import ThemeSettings from "../components/settings/ThemeSettings";

export default function SettingsPage() {
  return (
    <MainLayout>
      <SettingsHeader />
      <CompanySettings />
      <ProfileSettings />
      <NotificationSettings />
      <SecuritySettings />
      <ThemeSettings />
    </MainLayout>
  );
}