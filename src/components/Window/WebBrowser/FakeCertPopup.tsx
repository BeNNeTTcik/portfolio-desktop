import { useState } from "react";
import { FAKE_CERTIFICATE } from "./FakeCert";
import "./FakeCertPopup.css";
import { ImCross } from "react-icons/im";

interface Props {
  onClose: () => void;
}

export default function CertificatePopup({ onClose }: Props) {
  const [tab, setTab] = useState<"general" | "details">("general");
  const cert = FAKE_CERTIFICATE;

  return (
    <div className="cert-popup">
      <div className="cert-titlebar">
        <span>Certficate: *.mdampc-os.com</span>
        <button onClick={onClose}>
          <ImCross />
        </button>
      </div>

      <div className="cert-tabs">
        <button
          className={tab === "general" ? "active" : ""}
          onClick={() => setTab("general")}
        >
          General{" "}
        </button>
        <button
          className={tab === "details" ? "active" : ""}
          onClick={() => setTab("details")}
        >
          Details
        </button>
      </div>

      <div className="cert-content">
        {tab === "general" && (
          <>
            <h4>Issued for</h4>
            <p>
              <b>CN:</b> {cert.subject.CN}
            </p>
            <p>
              <b>O:</b> {cert.subject.O}
            </p>
            <p>
              <b>OU:</b> {cert.subject.OU}
            </p>

            <h4>Posted by</h4>
            <p>
              <b>CN:</b> {cert.issuer.CN}
            </p>
            <p>
              <b>O:</b> {cert.issuer.O}
            </p>
            <p>
              <b>OU:</b> {cert.issuer.OU}
            </p>

            <h4>Validity period</h4>
            <p>
              <b>Issued on:</b> {cert.validity.from}
            </p>
            <p>
              <b>Expires on:</b> {cert.validity.to}
            </p>
          </>
        )}

        {tab === "details" && (
          <>
            <p>
              <b>SHA-256 fingerprint:</b>
            </p>
            <code>{cert.fingerprints.sha256}</code>

            <p>
              <b>Public key:</b>
            </p>
            <code>{cert.fingerprints.publicKey}</code>
          </>
        )}
      </div>
    </div>
  );
}
