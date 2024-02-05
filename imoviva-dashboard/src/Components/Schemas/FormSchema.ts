import { z } from "zod";

export const schemaFormApartment = z.object({
        tipo: z.string(),
        titulo: z.string().min(1, 'Campo obrigatório'),
        preco: z.string().min(1, 'Campo obrigatório'),
        dimensoes: z.string().min(1, 'Campo obrigatório'),
        municipio: z.string(),
        distrito: z.string().min(1, 'Campo obrigatório'),
        bairro: z.string().min(1, 'Campo obrigatório'),
        fotos: z.instanceof(FileList),
        quartos: z.string().min(1, 'Campo obrigatório'),
        banheiros: z.string().min(1, 'Campo obrigatório'),
        suites: z.string().min(1, 'Campo obrigatório'),
        descricao: z.string(),
        disp_para: z.string(),
        status: z.string(),
})

export const schemaFormHouse = z.object({
        tipo: z.string(),
        titulo: z.string().min(1, 'Campo obrigatório'),
        preco: z.string().min(1, 'Campo obrigatório'),
        dimensoes: z.string().min(1, 'Campo obrigatório'),
        municipio: z.string(),
        distrito: z.string().min(1, 'Campo obrigatório'),
        bairro: z.string().min(1, 'Campo obrigatório'),
        fotos: z.instanceof(FileList),
        quartos: z.string().min(1, 'Campo obrigatório'),
        banheiros: z.string().min(1, 'Campo obrigatório'),
        suites: z.string().min(1, 'Campo obrigatório'),
        descricao: z.string(),
        disp_para: z.string(),
        status: z.string(),
})

export const schemaFormCommercial = z.object({
        tipo: z.string(),
        titulo: z.string().min(1, 'Campo obrigatório'),
        preco: z.string().min(1, 'Campo obrigatório'),
        dimensoes: z.string().min(1, 'Campo obrigatório'),
        municipio: z.string(),
        distrito: z.string().min(1, 'Campo obrigatório'),
        bairro: z.string().min(1, 'Campo obrigatório'),
        fotos: z.instanceof(FileList),
        banheiros: z.string().min(1, 'Campo obrigatório'),
        descricao: z.string(),
        disp_para: z.string(),
        status: z.string(),
})

export const schemaFormGround = z.object({
        tipo: z.string(),
        titulo: z.string().min(1, 'Campo obrigatório'),
        preco: z.string().min(1, 'Campo obrigatório'),
        dimensoes: z.string().min(1, 'Campo obrigatório'),
        municipio: z.string(),
        distrito: z.string().min(1, 'Campo obrigatório'),
        bairro: z.string().min(1, 'Campo obrigatório'),
        fotos: z.instanceof(FileList),
        descricao: z.string(),
        disp_para: z.string(),
        status: z.string(),
})