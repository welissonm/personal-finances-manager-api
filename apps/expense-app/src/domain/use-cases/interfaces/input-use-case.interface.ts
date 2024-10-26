export interface InputUseCase<INPUT> {
  execute(input: INPUT): Promise<void>
}

