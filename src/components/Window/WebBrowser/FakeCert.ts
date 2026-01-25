export const FAKE_CERTIFICATE = {
  subject: {
    CN: "*.mdampc-os.com",
    O: "<This is not a certificate element>",
    OU: "<This is not a certificate element>",
  },
  issuer: {
    CN: "LOL",
    O: "m.dampc-os.com Maybe Trusted Service",
    OU: "<This is not a certificate element>",
  },
  validity: {
    from: "Monday, December 24, 1860 23:59:59",
    to: "Monday, 30 February 2035 25:10:79",
  },
  fingerprints: {
    sha256:
      "XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
    publicKey:
      "XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
  },
};