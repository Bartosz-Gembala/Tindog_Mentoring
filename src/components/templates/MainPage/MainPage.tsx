import { MainPageContent } from "../../organisms/MainPageContent/MainPageContent";
import { Sidebar } from "../../organisms/Sidebar/Sidebar";
import { ProtectedRouteWrapper } from "../../atoms/ProtectedRouteWrapper/ProtectedRouteWrapper";
import { MainPageContextProvider } from "../../../providers/MainPageContextProvider";

export const MainPageTemplate = () => {
  return (
    <ProtectedRouteWrapper>
      <MainPageContextProvider>
        <div className="h-screen w-screen bg-background flex flex-row overflow-x-hidden">
          <Sidebar />
          <MainPageContent />
        </div>
      </MainPageContextProvider>
    </ProtectedRouteWrapper>
  );
};
