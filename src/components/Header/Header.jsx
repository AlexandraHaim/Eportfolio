import styled from "styled-components";
import aiimage from "../../utils/data/ai.png"

const Image = styled.img`
  width: 100%;
  height: 180px;
`
export default function Header() {
  return (
    <div>
        <Image src={aiimage}></Image>
    </div>
  );
}
