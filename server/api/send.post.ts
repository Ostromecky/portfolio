import { Resend } from 'resend'

import type { ISend } from '~/utils/send'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  try {
    const body: ISend = await readBody(event)

    const data = await resend.emails.send({
      from: 'delivered@resend.dev',
      to: ['pawel.ostromecky@gmail.com'],
      subject: body.subject,
      html: `
      <h2>From: ${body.name} ${body.email}</h2>
      <br/>
      <p>${body.message}</p>
      `
    })

    return { data }
  } catch (error) {
    return { error }
  }
})
