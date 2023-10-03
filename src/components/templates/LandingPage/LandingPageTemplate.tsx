import { LandingPageHeader } from '../../organisms/LandingPageHeader/LandingPageHeader'
import { useState } from 'react'
import { Modal } from '../../organisms/Modal/Modal'
import { AuthModalHeader } from '../../molecules/AuthModalHeader/AuthModalHeader'
import { AuthModalBody } from '../../molecules/AuthModalBody/AuthModalBody'

export const LandingPageTemplate = () => {
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(true)

  const handleOpenModal = () => setIsAuthModalVisible(true)
  const handleCloseModal = () => setIsAuthModalVisible(false)

  return (
    <>
      {isAuthModalVisible && <Modal onClose={handleCloseModal} header={<AuthModalHeader />} body={<AuthModalBody />} />}
      <div
        className={`
      h-screen shadow-landing p-9
      flex flex-col
      text-white
      bg-[url('https://imgix.bustle.com/uploads/shutterstock/2021/7/14/58b2cdd1-c517-4d73-aceb-3a0b8175814f-shutterstock-1250985262.jpg?w=2000&h=640&fit=crop&crop=faces&auto=format,compress')]`}
      >
        <LandingPageHeader onOpenAuth={handleOpenModal} />
        <div className="text-9xl text-center m-auto font-bold">
          <p className="shadow-navigation w-100 p-9">Swipe Right!</p>
        </div>
      </div>
    </>
  )
}
