/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: wK25SzSVlcE11AiD4qaUWnQSThng/bUjMiFdPAGWHPthf1dy9K1WT1dDRrG464o82l7PkO+BziK0QhM3wPdlGw==
 */

/* eslint-disable */
// tslint:disable

interface MetadataLocks {
  COLUMN_NAME: (string) | null
  LOCK_DURATION: string
  LOCK_STATUS: string
  LOCK_TYPE: string
  OBJECT_INSTANCE_BEGIN: (string | number | BigInt) & {readonly __brand?: 'metadata_locks_OBJECT_INSTANCE_BEGIN'}
  OBJECT_NAME: (string) | null
  OBJECT_SCHEMA: (string) | null
  OBJECT_TYPE: string
  OWNER_EVENT_ID: ((string | number | BigInt)) | null
  OWNER_THREAD_ID: ((string | number | BigInt)) | null
  SOURCE: (string) | null
}
export default MetadataLocks;

interface MetadataLocks_InsertParameters {
  COLUMN_NAME?: (string) | null
  LOCK_DURATION: string
  LOCK_STATUS: string
  LOCK_TYPE: string
  OBJECT_INSTANCE_BEGIN: (string | number | BigInt) & {readonly __brand?: 'metadata_locks_OBJECT_INSTANCE_BEGIN'}
  OBJECT_NAME?: (string) | null
  OBJECT_SCHEMA?: (string) | null
  OBJECT_TYPE: string
  OWNER_EVENT_ID?: ((string | number | BigInt)) | null
  OWNER_THREAD_ID?: ((string | number | BigInt)) | null
  SOURCE?: (string) | null
}
export type {MetadataLocks_InsertParameters}
