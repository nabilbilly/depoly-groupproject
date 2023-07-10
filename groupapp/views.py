
from django.shortcuts import render
import random

def generate_groups(request):
    if request.method == 'POST':
        number_groups = int(request.POST.get('number_groups',0))
        num_gp_members = int(request.POST.get('num_gp_members',0))

        a = []
        org_group = []

        for i in range(num_gp_members):
            ert_name_gp_mebs = request.POST.get(f'member{i+1}')
            a.append(ert_name_gp_mebs)

        members_per_group = num_gp_members // number_groups

        for i in range(number_groups):
            group = []
            for _ in range(members_per_group):
                if len(a) > 0:
                    random_member = random.choice(a)
                    group.append(random_member)
                    a.remove(random_member)
            org_group.append(group)

        context = {
            'org_group': org_group,
            'remaining_members': a,
            'num_gp_members': num_gp_members,
        }
        return render(request, 'groups.html', context)

    return render(request, 'index.html')