import { loadLanguage, type LanguageName } from "@uiw/codemirror-extensions-langs";

const EDITOR_LANGUAGE: Record<string, LanguageName> = {
          javascript: "js",
          typescript: "ts",
          coffeescript: "coffee",
          python: "py",
          java: "java",
          c: "c",
          csharp: "cs",
          php: "php",
          rust: "rs",
          html: "html",
          css: "css",
};

type LanguageSupport = NonNullable<ReturnType<typeof loadLanguage>>;

export function editorLanguage(name: string): LanguageSupport[] {
          const id = EDITOR_LANGUAGE[name];
          const support = id ? loadLanguage(id) : null;
          return support ? [support] : [];
}
