import type { StringifyOptions } from 'query-string';

export type FormatOptions = Exclude<StringifyOptions['arrayFormat'], undefined>;
