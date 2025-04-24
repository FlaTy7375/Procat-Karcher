import { StyledComments } from "./style";
import { CommentsWrapper } from "./style";
import { CommentsContainer } from "./style";
import SectionName from "../../ui/section-name/section-name";
import Card from "../../ui/card/card";
import Button from "../../ui/button/button";
import Avatar1 from "../../../assets/images/comment-ava1.png"
import Avatar2 from "../../../assets/images/comment-ava2.png"
import Avatar3 from "../../../assets/images/comment-ava3.png"

export default function Comments() {
  return (
    <StyledComments>
      <SectionName className="comments-name" id="comments">Ваши отзывы</SectionName>
      <CommentsWrapper>
        <CommentsContainer>
        <Card className="comments-card">
          <div className="comment-author">
            <img src={Avatar1} alt="avatar" width="64" height="64"/>
            <h2>Maxn Raval</h2>
          </div>
          <p className="comment-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </Card>
        <Card className="comments-card">
        <div className="comment-author">
            <img src={Avatar2} alt="avatar" width="64" height="64"/>
            <h2>Maxn Raval</h2>
          </div>
          <p className="comment-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </Card>
        <Card className="comments-card">
        <div className="comment-author">
            <img src={Avatar3} alt="avatar" width="64" height="64"/>
            <h2>Maxn Raval</h2>
          </div>
          <p className="comment-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </Card>
        </CommentsContainer>
        <Button className="write-comment">Оставить комментарий</Button>
      </CommentsWrapper>
    </StyledComments>
  );
}
