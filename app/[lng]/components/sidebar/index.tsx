import React from 'react'
import { getAllNotes } from '@/lib/redis';
import EditButton from '../editButton';
import { Suspense } from 'react';
import NoteListSkeleton from './components/NoteListSkeleton';
import SidebarNoteList from './components/SidebarNoteList';
import SidebarSearchField from './components/SidebarSearchField';
import { useTranslation } from '@/app/i18n';

export default async function Sidebar({lng}) {
  const notes = await getAllNotes()
  const { t } = await useTranslation(lng)
  return (
    <>
      <section className="col sidebar text-center">
        <label className="offscreen" htmlFor="sidebar-search-input">
          Search for a note by title
        </label>
        <div className='flex items-center space-between'>
          <SidebarSearchField lng={lng} />
          <EditButton>{t('new')}</EditButton>
        </div>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList />
          </Suspense>
        </nav>
      </section>
    </>
  )
}
