import styled from "styled-components";
// import { pdfjs } from "react-pdf";
// import resume from "../../utils/data/files/CV_Alexandra_Haim.pdf"
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    color: #151754;
`
const Nom = styled.div`
    font-size: 40px;
`
const Classe = styled.div`
    font-size: 20px;
    font-style: italic;
`
const Explications = styled.div`
    width: 400px;
`

export default function HomePresentation() {
  return (
    <Intro>
        <Nom>Alexandra Haim</Nom>
        <Classe>Digital Sciences student at ENSEEIHT</Classe>
        <Explications>I  was born in France in an environment that promotes human development. I quickly became interested in science, and particularly in digital technology: I would like to create an Artificial Intelligence at the service of humans.</Explications>
        {/* <a href={resume} target="_blank" rel="noreferrer">
        Open PDF
      </a> */}
    </Intro>
  );
}
