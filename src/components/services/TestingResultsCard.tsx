import { cn } from '@/lib/utils'

interface TestResult {
  range: string
  description: string
  severity?: 'safe' | 'caution' | 'danger'
}

interface TestingResultsCardProps {
  title: string
  results: TestResult[]
  className?: string
}

export function TestingResultsCard({ 
  title, 
  results, 
  className 
}: TestingResultsCardProps) {
  const getSeverityBorderClass = (severity?: string) => {
    switch (severity) {
      case 'safe':
        return 'border-green-500/30'
      case 'caution':
        return 'border-amber-500/30'
      case 'danger':
        return 'border-destructive/30'
      default:
        return ''
    }
  }

  return (
    <div className={cn(className)}>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {results.map((result, index) => (
          <div 
            key={index} 
            className={cn(
              "p-4 bg-card rounded-lg border",
              getSeverityBorderClass(result.severity)
            )}
          >
            <div className="font-semibold mb-1">{result.range}</div>
            <p className="text-sm text-muted-foreground">{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}