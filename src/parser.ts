import { SpeechSegment } from "@speechly/react-client";

export enum IntentType {
  Unknown = "unknown",
  Sort = "hello",
  Filter = "filter",
  Reset = "reset",
  Fname = "first Name",
  lname = "last Name"
}

export enum EntityType {
  lname = "last Name",
  SortField = "sort_field",
}

export enum SortEntityType {
  Unknown = "unknown",
  Name = "name",
  Description = "description",
  lname = "lname",
  Followers = "followers",
  Zip = "zip",
  Forks = "forks",
}

const SpeechIntentValues = Object.values(IntentType) as string[];
const SortTypeValues = Object.values(SortEntityType) as string[];

export function parseIntent(segment: SpeechSegment): IntentType {
  const { intent } = segment;
  console.log(segment);
  console.log(intent);

  if (SpeechIntentValues.includes(intent.intent)) {
    console.log(intent.intent);
    return intent.intent as IntentType;
  }

  return IntentType.Unknown;
}

export function parseLanguageEntity(segment: SpeechSegment): string[] {
  const langs: string[] = [];

  for (const e of segment.entities) {
    if (e.type === EntityType.lname) {
      langs.push(e.value.toLowerCase());
    }
  }

  return langs;
}

export function parseSortEntity(segment: SpeechSegment): SortEntityType {
  let s = SortEntityType.Unknown;

  for (const e of segment.entities) {
    const val = e.value.toLowerCase();

    if (e.type === EntityType.SortField && SortTypeValues.includes(val)) {
      s = val as SortEntityType;
    }
  }

  return s;
}
