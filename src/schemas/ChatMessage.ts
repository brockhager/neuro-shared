export interface ChatMessage {
  sender: string;
  content: string;
  timestamp?: string; // ISO-8601
  cid?: string; // optional CID for provenance
  txSignature?: string; // optional Tx Signature from anchor
}

export interface ChatResponse {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  cid?: string;
  txSignature?: string;
}
