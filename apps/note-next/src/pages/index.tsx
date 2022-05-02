import { NotesDocument } from 'gql-schema'
import { GetServerSideProps } from 'next'
import { Button } from 'ui-react'
import NoteEditor from '../components/NoteEditor'
import Sidebar from '../components/Sidebar'
import {
  createPropsWithInitialApolloState,
  initializeApollo,
} from '../libs/apollo'
import { ActiveNoteIdProvider } from '../states/ActiveNoteId'

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()
  // Prefetch the data from the server side
  await apolloClient.query({ query: NotesDocument })

  return {
    props: createPropsWithInitialApolloState(apolloClient),
  }
}

export default function Index() {
  return (
    <div>
      <main className="mx-auto max-w-5xl px-4 pt-20 text-neutral-600">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-neutral-700 sm:text-5xl lg:text-6xl">
            Notes
          </h1>
        </div>
        <section className="grid grid-cols-4 divide-x overflow-hidden rounded-lg border border-neutral-300">
          <ActiveNoteIdProvider>
            <Sidebar />
            <NoteEditor />
          </ActiveNoteIdProvider>
        </section>
      </main>
      <div className="hidden">
        <Button />
      </div>
    </div>
  )
}
