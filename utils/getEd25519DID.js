import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";

// `seed` must be a 32-byte long Uint8Array
async function getEd25519DID() {
  const seed_hexstring = process.env.MAIN_SEED;
  if (seed_hexstring !== null) {
    const seed = Uint8Array.from(
      seed_hexstring.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );
    const provider = new Ed25519Provider(seed);
    const did = new DID({ provider, resolver: getResolver() });
    await did.authenticate();
    return did;
  }
}

export default getEd25519DID;
