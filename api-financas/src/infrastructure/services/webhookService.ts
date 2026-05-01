
export async function sendToN8n(data: any) {
  await fetch('http://localhost:5678/webhook/transaction-alert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}