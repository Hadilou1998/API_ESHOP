/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: M/qZxfatV4kpN51oR21B1Vz7UTAhIB2RlYos+oHCkq+GIQs2USAa3TZVzjoxbPt5Ld82CAckr2n4+8EOZpdb7A==
 */

/* eslint-disable */
// tslint:disable

interface EventsErrorsSummaryByThreadByError {
  ERROR_NAME: (string) | null
  ERROR_NUMBER: (number) | null
  FIRST_SEEN: ((string | Date)) | null
  LAST_SEEN: ((string | Date)) | null
  SQL_STATE: (string) | null
  SUM_ERROR_HANDLED: (string | number | BigInt)
  SUM_ERROR_RAISED: (string | number | BigInt)
  THREAD_ID: (string | number | BigInt)
}
export default EventsErrorsSummaryByThreadByError;

interface EventsErrorsSummaryByThreadByError_InsertParameters {
  ERROR_NAME?: (string) | null
  ERROR_NUMBER?: (number) | null
  FIRST_SEEN?: ((string | Date)) | null
  LAST_SEEN?: ((string | Date)) | null
  SQL_STATE?: (string) | null
  SUM_ERROR_HANDLED: (string | number | BigInt)
  SUM_ERROR_RAISED: (string | number | BigInt)
  THREAD_ID: (string | number | BigInt)
}
export type {EventsErrorsSummaryByThreadByError_InsertParameters}