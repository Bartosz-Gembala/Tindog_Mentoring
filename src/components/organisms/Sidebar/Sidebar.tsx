import { FC, useState } from "react";
import { Header } from "../../atoms/Header/Header";
import { Button } from "../../atoms/Button/Button";
import {
  ButtonsSet,
  IButtonConfig,
} from "../../molecules/ButtonsSet/ButtonsSet";
import { useMainPageContext } from "../../../contexts/main-page-context";
import { UserMiniature } from "../../molecules/UserMiniature/UserMinature";

const headerButtons: IButtonConfig[] = [
  { variant: "round", text: "X", onClick: () => {} },
  { variant: "round", text: "X", onClick: () => {} },
  { variant: "round", text: "X", onClick: () => {} },
];

export const Sidebar: FC = () => {
  const [isMatchesVisible, setIsMatchesVisible] = useState(true);
  const { matches } = useMainPageContext();

  const showMatches = () => {
    !isMatchesVisible && setIsMatchesVisible(true);
  };

  const showMessages = () => {
    isMatchesVisible && setIsMatchesVisible(false);
  };

  return (
    <div className="h-screen w-1/4 border bg-white border-primary">
      <Header className="h-24 flex justify-between items-center p-5">
        <Button variant="round">I</Button>
        <div>
          <ButtonsSet buttons={headerButtons} />
        </div>
      </Header>
      <div className="h-1/4 bg-background"></div>
      <div className="flex gap-5 p-5">
        <Button onClick={showMatches} active={isMatchesVisible} variant="link">
          Matches
        </Button>
        <Button
          onClick={showMessages}
          active={!isMatchesVisible}
          variant="link"
        >
          Messages
        </Button>
      </div>
      <div className="mx-1">
        {isMatchesVisible && (
          <div className="flex justify-start px-4 gap-2 flex-wrap overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
            {matches.map((match) => (
              <UserMiniature
                key={match.name + match.description}
                user={match}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
