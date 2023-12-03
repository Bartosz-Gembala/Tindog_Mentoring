import { MainPageContent } from "../../organisms/MainPageContent/MainPageContent";
import { Sidebar } from "../../organisms/Sidebar/Sidebar";
import { ProtectedRouteWrapper } from "../../atoms/ProtectedRouteWrapper/ProtectedRouteWrapper";

export const MainPageTemplate = () => {
  return (
    <ProtectedRouteWrapper>
      <div className="h-screen w-screen bg-background flex flex-row">
        <Sidebar />
        <MainPageContent />
      </div>
    </ProtectedRouteWrapper>
  );
};
