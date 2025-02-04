import { useRouter } from 'next/navigation'

interface Props {
    className?: string
    name: string
    submitHandler: any
    statusState: {
        status: any
        setStatus: any
    }
    errorState: {
        error: any
        setError: any
    }
    successPage?: string
    children: React.ReactNode
}

export function FormNetlify({
    className,
    name,
    submitHandler,
    statusState,
    errorState,
    successPage = '/thank-you',
    children,
}: Props) {
    const router = useRouter()

    const onSubmit = async (data: FormData, event: any) => {
        // console.log("IT WORKED", data);
        event.preventDefault()
        try {
            statusState.setStatus('pending')
            event.nativeEvent.submitter.disabled = true
            errorState.setError('null')
            const myForm = event.target
            const formData = new FormData(myForm)
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                // @ts-ignore
                body: new URLSearchParams(formData).toString(),
            })
            if (res.status === 200) {
                statusState.setStatus('ok')
                if (successPage) {
                    router.push(successPage)
                }
            } else {
                statusState.setStatus('error')
                errorState.setError(`${res.status} ${res.statusText}`)
            }
        } catch (e) {
            statusState.setStatus('error')
            errorState.setError(`${e}`)
            console.log(statusState.status)
            console.log(errorState.error)
        }
    }

    return (
        <>
            <form
                className={className}
                method="POST"
                name={name}
                onSubmit={submitHandler(onSubmit)}
                data-netlify="true"
                netlify-honeypot="bot-field">
                <p className="hidden">
                    <label>
                        Don’t fill this out if you’re human:{' '}
                        <input name="bot-field" />
                    </label>
                </p>
                <input type="hidden" name="form-name" value={name} />
                {children}
            </form>
        </>
    )
}
