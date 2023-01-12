/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: RilMtBCuZaAI6UcRHdlnb218RrdeR9za8L0ETCFA3DgmYTe02sbxeqLyQiKZmUhD7fhs9W6Xbo/byqHCvU1s5A==
 */

/* eslint-disable */
// tslint:disable

interface PersonalAccessTokens {
  abilities: (string) | null
  created_at: ((string | Date)) | null
  id: (string | number | BigInt) & {readonly __brand?: 'personal_access_tokens_id'}
  last_used_at: ((string | Date)) | null
  name: string
  token: string
  tokenable_id: (string | number | BigInt)
  tokenable_type: string
  updated_at: ((string | Date)) | null
}
export default PersonalAccessTokens;

interface PersonalAccessTokens_InsertParameters {
  abilities?: (string) | null
  created_at?: ((string | Date)) | null
  id: (string | number | BigInt) & {readonly __brand?: 'personal_access_tokens_id'}
  last_used_at?: ((string | Date)) | null
  name: string
  token: string
  tokenable_id: (string | number | BigInt)
  tokenable_type: string
  updated_at?: ((string | Date)) | null
}
export type {PersonalAccessTokens_InsertParameters}
