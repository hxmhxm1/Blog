import { useTranslation } from "../i18n"

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <div className="note--empty-state">
      <span className="note-text--empty-state">
      {t('initText')}
      </span>
    </div>
  )
}
