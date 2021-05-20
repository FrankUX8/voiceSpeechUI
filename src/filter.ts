import { Repository } from "./data";
import { SortEntityType } from "./parser";

export type Filter = {
  languages?: string[];
  sortBy?: SortEntityType;
};

export function filterRepos(
  input: Repository[],
  filters: Filter
): Repository[] {
  let output = input;

  const languages = filters.languages ?? [];
  if (languages.length > 0) {
    output = input.filter((repo) =>
      languages.includes(repo.last.toLowerCase())
    );
  }

  if (filters.sortBy === undefined) {
    return output;
  }

  return output.sort((left, right) => {
    switch (filters.sortBy) {
      case SortEntityType.Name:
        return left.name.localeCompare(right.name);
      case SortEntityType.Description:
        return left.status.localeCompare(right.status);
      case SortEntityType.lname:
        return left.last.localeCompare(right.last);
      case SortEntityType.Followers:
        return compareNumber(left.id, right.id);
      case SortEntityType.Zip:
        return compareNumber(left.zip, right.zip);
      case SortEntityType.Forks:
        return left.name.localeCompare(right.state);
    }

    return 0;
  });
}

function compareNumber(left: number, right: number) {
  if (left < right) {
    return -1;
  }

  if (left > right) {
    return 1;
  }

  return 0;
}
