<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/12672784?v=4',
    name: 'Kiryl Maltsav',
    title: 'Tech Lead',
    links: [
      { icon: 'github', link: 'https://github.com/maltsavkiryl' },
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/47747743?v=4',
    name: 'Wouter Laermans',
    title: 'Circle Lead & Tech Architect',
    links: [
      { icon: 'github', link: 'https://github.com/wouterlms' },
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/44748019?v=4',
    name: 'Robbe Vaes',
    title: 'Software Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/Robbe95' },
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/61234140?v=4',
    name: 'Jeroen Van Caeckenberghe',
    title: 'Software Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/JeroenVanC' },
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/46561922?v=4',
    name: 'Nick Banken',
    title: 'Software Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/NickBanken' },
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/71388306?v=4',
    name: 'Tanya Leenders',
    title: 'Software Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/Tanya-Amber-L' },
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/109092992?v=4',
    name: 'Jeffrey Nijs',
    title: 'Software Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/JeffreyNijs' },
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/80922251?v=4',
    name: 'Glenn Reumers',
    title: 'Software Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/Citingdude' },
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/123674635?v=4',
    name: 'Jordy Blocken',
    title: 'Software Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/Blocken-Jordy' },
    ]
  },
]
</script>

# Meet the team

This project is maintained by a team of passionate web developers. We are always looking for people to help us improve this project.
If you are interested in helping, check out our [github](https://github.com/wisemen-digital/vue-playbook) and make a pull request!

<VPTeamMembers size="small" :members="members" />
