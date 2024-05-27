import pdf from "../../assets/pdf/TGuinee_CV.pdf"

export const CV = () => {

  return (
    <div>
      <iframe
        title="Curriculum Vitae"
        src={pdf}
        style={{ width: "100%", height: "100vw" }}
      />
    </div>
  );
};
