export interface OutputUseCase<OUTPUT> {
  execute(): Promise<OUTPUT>
}