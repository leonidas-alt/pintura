'use client';
import Image from 'next/image';
export function ImageUploadPreview({files,onRemove}:{files:File[];onRemove:(i:number)=>void}){return <div className="grid gap-3 sm:grid-cols-3">{files.map((file,i)=><div key={`${file.name}-${i}`} className="relative rounded-2xl border bg-white p-2"><Image src={URL.createObjectURL(file)} alt={`Prévia da foto ${i+1}`} width={240} height={160} className="h-32 w-full rounded-xl object-cover"/><button type="button" onClick={()=>onRemove(i)} className="mt-2 text-sm font-bold text-red-700">Remover</button></div>)}</div>}
