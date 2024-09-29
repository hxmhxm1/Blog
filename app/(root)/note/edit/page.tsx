import NoteEditor from "@/components/note/components/noteEditor";

export default async function EditPage() {
  return <NoteEditor note={null} initialTitle="Untitled" initialBody="" />
}
