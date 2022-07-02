import styled from "styled-components";
// import { Document, Page, pdfjs } from "react-pdf";
// import resume from "../../utils/data/files/CV_Alexandra_Haim.pdf"
import HomePresentation from "../../components/HomePresntation/HomePresentation";

const Truc = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 20px;
  left: 40%;
`

export default function Home() {
  return (
    <Truc>
      {/* <Document
        file={resume}
        onLoadError={console.error}
        style={{width: "100vw", height: "auto"}}
      >
        <Page pageIndex={0}/>  
      </Document> */}


      <HomePresentation />

    </Truc>
  );
}
