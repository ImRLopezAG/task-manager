import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
  ScissorsIcon
} from '@radix-ui/react-icons'

type Color = 'success' | 'warning' | 'info' | 'danger'
interface Label {
  value: string
  label: string
  color: Color
}
export const labels: Label[] = [
  {
    value: 'bug',
    label: 'Bug',
    color: 'danger'
  },
  {
    value: 'feature',
    label: 'Feature',
    color: 'success'
  },
  {
    value: 'documentation',
    label: 'Documentation',
    color: 'info'
  },
  {
    value: 'development',
    label: 'Development',
    color: 'warning'
  }
]

export const statuses = [
  {
    value: 'backlog',
    label: 'Backlog',
    icon: QuestionMarkCircledIcon
  },
  {
    value: 'todo',
    label: 'Todo',
    icon: CircleIcon
  },
  {
    value: 'in progress',
    label: 'In Progress',
    icon: StopwatchIcon
  },
  {
    value: 'done',
    label: 'Done',
    icon: CheckCircledIcon
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: CrossCircledIcon
  },
  {
    value: 'archived',
    label: 'Archived',
    icon: ScissorsIcon
  }
]

export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: ArrowDownIcon
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: ArrowRightIcon
  },
  {
    label: 'High',
    value: 'high',
    icon: ArrowUpIcon
  }
]
