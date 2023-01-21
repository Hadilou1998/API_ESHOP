/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: EAytLVKfCkDp/pKfIm/vJlS2CPnDEmp7GKVvM3ZVZX+boyAaEBgNEtzjTfnmF1d6ohoj0Ww2knS7jJnYOJaP6g==
 */

/* eslint-disable */
// tslint:disable

interface InnodbRedoLogFiles {
  /**
   * All redo log consumers registered on smaller levels than this value, have already consumed this file.
   */
  CONSUMER_LEVEL: number
  /**
   * LSN after the last block in the file.
   */
  END_LSN: (string | number | BigInt)
  /**
   * Id of the file.
   */
  FILE_ID: (string | number | BigInt)
  /**
   * Path to the file.
   */
  FILE_NAME: string
  /**
   * 1 iff file has no free space inside.
   */
  IS_FULL: (boolean | number)
  /**
   * Size of the file (in bytes).
   */
  SIZE_IN_BYTES: (string | number | BigInt)
  /**
   * LSN of the first block in the file.
   */
  START_LSN: (string | number | BigInt)
}
export default InnodbRedoLogFiles;

interface InnodbRedoLogFiles_InsertParameters {
  /**
   * All redo log consumers registered on smaller levels than this value, have already consumed this file.
   */
  CONSUMER_LEVEL: number
  /**
   * LSN after the last block in the file.
   */
  END_LSN: (string | number | BigInt)
  /**
   * Id of the file.
   */
  FILE_ID: (string | number | BigInt)
  /**
   * Path to the file.
   */
  FILE_NAME: string
  /**
   * 1 iff file has no free space inside.
   */
  IS_FULL: (boolean | number)
  /**
   * Size of the file (in bytes).
   */
  SIZE_IN_BYTES: (string | number | BigInt)
  /**
   * LSN of the first block in the file.
   */
  START_LSN: (string | number | BigInt)
}
export type {InnodbRedoLogFiles_InsertParameters}