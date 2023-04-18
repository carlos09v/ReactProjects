import { useEffect, useState } from 'react'
import './styles/global.css'
import ToggleTheme from './components/ToggleTheme'

import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

/**
 * To-do
 * 
 * [✓] Validação / transformação
 * [✓] Field Arrays
 * [ ] Upload de arquivos
 * [ ] Composition Pattern
 */

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5mb
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// Schema do Form com Validaçõs e Transformações
const createUserFormSchema = z.object({
  avatar: z.instanceof(FileList)
    // .refine(file => !!file.item(0), 'A imagem de perfil é obrigatória!')
    // .refine(file => file.item(0)!.size <= MAX_FILE_SIZE, 'O arquivo precisa ter no máximo 5MB.')
    // .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.item(0)!.type), 'Formato de imagem inválido!')
    .transform(list => list.item(0)!), // Subir apenas 1 imagem
  name: z.string()
    .nonempty('O nome é obrigatório!')
    .transform(nome => {
      return nome.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ') // Captalize and Trim Transform
    }),
  email: z.string()
    .nonempty('O e-mail é obrigatório!')
    .email('Formato de e-mail inválido :(')
    .toLowerCase()
    .refine(email => {
      return email.endsWith('@rocketseat.com.br')
    }, 'O e-mail precisa ser da Rocketseat.'),
  password: z.string()
    .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
  techs: z.array(z.object({
    title: z.string().nonempty('O titulo é obrigatório!'),
    knowledge: z.coerce.number().min(1).max(10) // coerce => recebe string e converte pra number
  }))
    .min(2, 'Insira pelo menos 2 tecnologias.')
    .refine(techs => {
      return techs.some(tech => tech.knowledge > 3)
    }, 'Você está aprendendo! Pelo menos 1 deve ser maior que 3.') // Pelo menos 1 knowledge deve ser maior q 3
})

// Tipagem por inferência (automática)
type CreateUserFormData = z.infer<typeof createUserFormSchema>

function App() {
  // Theme Check
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark')
  }, [])

  // -----------------------
  const [output, setOutput] = useState('')
  const { register, handleSubmit, formState: { errors }, control } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  // - Field Arrays
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'techs'
  })

  const addNewTech = () => append({ title: '', knowledge: 0 })


  // -----------------------
  const createUser = (data: CreateUserFormData) => {
    // supabase storage upload --

    console.log(data.avatar)
    setOutput(JSON.stringify(data, null, 2))
  }

  // High-order function => Função dentro de função

  return (
    <>
      <ToggleTheme />
      <main className='h-screen bg-zinc-300 dark:bg-zinc-900 dark:text-zinc-300 flex flex-col gap-3 items-center justify-center'>
        <form onSubmit={handleSubmit(createUser)} className='flex flex-col gap-4 w-full max-w-xs'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="avatar">Avatar</label>
            <input
              type="file"
              accept='image/*'
              id="avatar"
              {...register('avatar')}
            />
            {errors.avatar && <span className='text-red-500 text-sm'>{errors.avatar.message}</span>}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              className='border dark:border-zinc-600 shadow-sm rounded h-10 px-3 dark:bg-zinc-700 dark:text-white'
              {...register('name')}
            />
            {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className='border dark:border-zinc-600 shadow-sm rounded h-10 px-3 dark:bg-zinc-700 dark:text-white'
              {...register('email')}
            />
            {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              className='border dark:border-zinc-600 shadow-sm rounded h-10 px-3 dark:bg-zinc-700 dark:text-white'
              {...register('password')}
            />
            {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="" className='flex items-center justify-between'>
              Tecnologias

              <button type='button' className='text-emerald-500 text-xs' onClick={addNewTech}>Adicionar</button>
            </label>

            {/* - Field Arrays */}
            {fields.map((field, index) => (
              <div className='flex gap-2' key={field.id}>
                <div className='flex-1 flex flex-col gap-1'>
                  <input
                    type="text"
                    className='border dark:border-zinc-600 shadow-sm rounded h-10 px-3 dark:bg-zinc-700 dark:text-white'
                    {...register(`techs.${index}.title`)}
                  />
                  {errors.techs?.[index]?.title && <span className='text-red-500 text-sm'>{errors.techs?.[index]?.title?.message}</span>}
                </div>

                <div className='flex flex-col gap-1'>
                  <input
                    type="number"
                    className='w-16 border dark:border-zinc-600 shadow-sm rounded h-10 px-3 dark:bg-zinc-700 dark:text-white'
                    {...register(`techs.${index}.knowledge`)}
                  />
                  {errors.techs?.[index]?.knowledge && <span className='text-red-500 text-sm'>{errors.techs?.[index]?.knowledge?.message}</span>}
                </div>

                <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-white p-2 bg-red-500 rounded"
                  >
                    X
                  </button>
              </div>
            ))}

            {errors.techs && <span className='text-red-500 text-sm'>{errors.techs.message}</span>}
          </div>

          <button type="submit" className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600 transition-colors'>Salvar</button>
        </form>

        <pre>{output}</pre>
      </main>
    </>
  )
}

export default App
