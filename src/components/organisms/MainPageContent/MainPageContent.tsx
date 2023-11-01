import { FC } from 'react'
import { UserCard } from '../UserCard/UserCard'
import { users } from '../../../shared/mocks/users'

export const MainPageContent: FC = () => {
  return (
    <div className="flex h-screen w-3/4  items-center rounded justify-center">
      <UserCard user={users[0]} />
    </div>
  )
}
