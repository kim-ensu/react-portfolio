import React, { useState } from "react";
import "./CertificateCard.css";
import loupeBtnIcon from "../../../assets/certificate-loupe.svg";
import externalLinkBtnIcon from "../../../assets/certificate-external-link.svg";
import ModalComponent from "../ModalComponent/ModalComponent";

function CertificateCard({ certificate }) {
  const { link, image } = certificate;
  const [modalShow, setModalShow] = useState(false);

  return (
    <li className="certificates__item">
      <img className="certificate__img" src={image} alt="small certificate" />
      <ModalComponent
        image={image}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <img
        onClick={() => setModalShow(true)}
        className="certificate__loupe_icon"
        src={loupeBtnIcon}
        alt="loupe icon"
      />
      <a href={link} target="_blank" rel="noreferrer">
        <img
          className="certificate__link_icon"
          src={externalLinkBtnIcon}
          alt="link icon"
        />
      </a>
    </li>
  );
}

export default CertificateCard;
