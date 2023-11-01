import { MainPageContent } from '../../organisms/MainPageContent/MainPageContent'
import { Sidebar } from '../../organisms/Sidebar/Sidebar'

export const MainPageTemplate = () => {
  return (
    <div className="h-screen w-screen bg-background flex flex-row">
      <Sidebar />
      <MainPageContent />
    </div>
  )
}
