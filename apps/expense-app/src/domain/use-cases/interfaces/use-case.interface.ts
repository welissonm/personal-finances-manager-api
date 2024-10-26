export interface UseCase<INPUT, OUTPUT=INPUT> {
  execute(input: INPUT): Promise<OUTPUT>
}