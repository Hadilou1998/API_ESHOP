/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: wtRMrjzhE8+jqj+HyU1onxwjAIJx4iVRUI1jwresU2SZGbwQL3QVbdMukt8PLJNfjs3fmjiutE0322rhRWTy3g==
 */

/* eslint-disable */
// tslint:disable

interface InnodbTableStats {
  clustered_index_size: (string | number | BigInt)
  database_name: string & {readonly __brand?: 'innodb_table_stats_database_name'}
  /**
   * @default CURRENT_TIMESTAMP
   */
  last_update: (string | Date)
  n_rows: (string | number | BigInt)
  sum_of_other_index_sizes: (string | number | BigInt)
  table_name: string & {readonly __brand?: 'innodb_table_stats_table_name'}
}
export default InnodbTableStats;

interface InnodbTableStats_InsertParameters {
  clustered_index_size: (string | number | BigInt)
  database_name: string & {readonly __brand?: 'innodb_table_stats_database_name'}
  /**
   * @default CURRENT_TIMESTAMP
   */
  last_update?: (string | Date)
  n_rows: (string | number | BigInt)
  sum_of_other_index_sizes: (string | number | BigInt)
  table_name: string & {readonly __brand?: 'innodb_table_stats_table_name'}
}
export type {InnodbTableStats_InsertParameters}
