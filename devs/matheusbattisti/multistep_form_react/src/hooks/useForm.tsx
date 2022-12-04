import { FormEvent, ReactElement, useState } from "react";

// Hook para Atualizar o Form atual
export function useForm(steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(i: number, e?: FormEvent) {
        e?.preventDefault()

        // Validar o indice recebido
        if(i < 0 || i >= steps.length) return

        setCurrentStep(i)
    }

    return { 
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false
    }
}