import { CeramicClient } from "@ceramicnetwork/http-client";
import { TileDocument } from "@ceramicnetwork/stream-tile";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";

import getEd25519DID from "../../utils/getEd25519DID";

const ceramic = new CeramicClient({ ceramic: "testnet-clay" });
ceramic.did = getEd25519DID();

async function createDocument(_: any, res: any) {
  const doc = await TileDocument.create(ceramic, []);
  res.status(200).json({ id: doc.id });
}

export default createDocument;
