import Note from '@/app/[lng]/components/note/index'
import {getNote} from '@/lib/redis';
import "../../globals.css";

export default async function Page({ params }) {
  // 动态路由 获取笔记 id
  const noteId = params.id;
  const note = await getNote(noteId)

  // 为了让 Suspense 的效果更明显
  // const sleep = ms => new Promise(r => setTimeout(r, ms));
  // await sleep(5000);

  if (note == null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something! 🥺
        </span>
      </div>
    )
  }

  return <Note noteId={noteId} note={note} />
}

