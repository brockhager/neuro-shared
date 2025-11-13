// PDA seed rules and constants for NeuroSwarm
// These seeds are used to derive Program Derived Addresses (PDAs) for consistent account addressing

export const PDA_SEEDS = {
  // Core governance accounts
  MANIFEST: "manifest",
  ATTESTATION: "attestation", 
  VALIDATOR: "validator",
  GOVERNANCE: "governance",

  // Additional seeds for future use
  // Add more as needed
} as const;

// Seed derivation rules:
// - All seeds are UTF-8 encoded strings
// - Seeds should be descriptive and unique within the program
// - For composite PDAs, combine seeds with additional data (e.g., user pubkey)

export type PdaSeed = typeof PDA_SEEDS[keyof typeof PDA_SEEDS];