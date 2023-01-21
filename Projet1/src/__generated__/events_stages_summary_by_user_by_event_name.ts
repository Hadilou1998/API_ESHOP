/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: El0jx/tGPtHFgzt+XZyLy5VwT8oieIjICWHHcCXnOqXX837Wb06TPo6xeMCijx8nBfOhUkkc8TDDlKhGFKec4g==
 */

/* eslint-disable */
// tslint:disable

interface EventsStagesSummaryByUserByEventName {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  USER: (string) | null
}
export default EventsStagesSummaryByUserByEventName;

interface EventsStagesSummaryByUserByEventName_InsertParameters {
  AVG_TIMER_WAIT: (string | number | BigInt)
  COUNT_STAR: (string | number | BigInt)
  EVENT_NAME: string
  MAX_TIMER_WAIT: (string | number | BigInt)
  MIN_TIMER_WAIT: (string | number | BigInt)
  SUM_TIMER_WAIT: (string | number | BigInt)
  USER?: (string) | null
}
export type {EventsStagesSummaryByUserByEventName_InsertParameters}