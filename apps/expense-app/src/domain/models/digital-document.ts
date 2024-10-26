export interface DigitalDocument {
  fileUri: string;
  integrityHash: string;
  uploadedAt: Date;
  description?: string;
}