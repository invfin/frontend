import { LONG_MAX_AGE } from "@/constants";

export type Visit = {
  path: string,
  title: string,
  category: VisitCategory,
}

enum VisitCategory {
  Term,
  Companie,
  Writer,
  Blog,
}


export async function getFullPath(visit: Visit): Promise<string> {
  const initialPath = await getInitialPath(visit.category);
  return initialPath + visit.path;
}

async function getInitialPath(category: VisitCategory): Promise<string> {
  switch (category) {
    case VisitCategory.Term:
      return "/diccionario/";
    case VisitCategory.Companie:
      return "/companies/";
    case VisitCategory.Writer:
      return "/blogs/";
    case VisitCategory.Blog:
      return "/blogs/";
  }
}

export async function remove(path: string) {
  //TODO: fix seems kinda broke
  const visits = useVisits().value;
  if (visits && visits[path]) {
    delete useVisits().value[path];
    await removeFromCookie(path);
  }
}

async function removeFromCookie(path: string) {
  const visitsStored = useManageCookie("v", LONG_MAX_AGE).value;
  const objVisitsStored = visitsStored ? JSON.parse(visitsStored) : {};
  delete objVisitsStored[path];
  useManageCookie("v", LONG_MAX_AGE).value = JSON.stringify(objVisitsStored);
}

export async function saveTerm(path: string, title: string) {
  await save(path, title, VisitCategory.Term);
}

export async function saveCompanie(path: string, title: string) {
  await save(path, title, VisitCategory.Companie);
}

export async function saveWriter(path: string, title: string) {
  await save(path, title, VisitCategory.Writer);
}

export async function saveBlog(path: string, title: string) {
  await save(path, title, VisitCategory.Blog);
}

async function save(path: string, title: string, category: VisitCategory) {
  //TODO: fix seems kinda broke
  const newVisit = { path, title, category } as Visit;
  const visits = useVisits().value;
  visits[path] = newVisit;
  await persist(newVisit);
}

async function persist(newVisit: Visit) {
  const visitsStored = useManageCookie("v", LONG_MAX_AGE).value;
  const objVisitsStored = visitsStored ? JSON.parse(visitsStored) : {};
  objVisitsStored[newVisit.path] = newVisit;
  useManageCookie("v", LONG_MAX_AGE).value = JSON.stringify(objVisitsStored);
}

